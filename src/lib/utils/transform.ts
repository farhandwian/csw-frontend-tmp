import { TAddQuizSubmissionPayload, TQuiz } from "@/types/quiz/";
import { formatSecondToTime } from "./formateSecondToTime";
import {
  TAddExerciseSubmissionPayload,
  TExerciseDetail,
} from "@/types/exercise";

export const TransformQuizToPayloadQuizSubmission = (
  quiz: TQuiz,
  user_id: number,
  time_left: number,
): TAddQuizSubmissionPayload => {
  const { id, topic, modul, total_questions, total_time, questions } = quiz;

  const total_time_in_seconds = total_time * 600000;
  const time_required = formatSecondToTime(total_time_in_seconds - time_left);

  console.log(total_time_in_seconds, time_required);
  const questionsSubmission = questions.map((question) => {
    const {
      id,
      uuid,
      question: questionText,
      options,
      mark,
      status,
      user_answer,
    } = question;
    const optionsSubmission = options.map((option) => {
      const { id, uuid, letter, text } = option;
      return { id, uuid, letter, text };
    });
    return {
      id,
      uuid,
      question: questionText,
      options: optionsSubmission,
      mark,
      status,
      user_answer,
    };
  });

  return {
    user_id,
    quiz_id: id,
    topic,
    modul,
    total_questions,
    time_required,
    questions: questionsSubmission,
  };
};

// export const TransformExerciseToPayloadExerciseSubmission = (
//   exercise: TExerciseDetail,
//   time_left: number,
// ): TAddExerciseSubmissionPayload => {
//   const { uuid, time, questions } = exercise;

//   const total_time_in_seconds = time * 600000;
//   const time_required = formatSecondToTime(total_time_in_seconds - time_left);
//   console.log(total_time_in_seconds, time_required);

//   const answers = questions.map((question) => {
//     const { sub_module_id, user_answer } = question;
//     return {
//       sub_module_id,
//       choice_uuid: user_answer ? user_answer : "",
//     };
//   });

//   const exerciseSubmissionPayload: TAddExerciseSubmissionPayload = {
//     exercise_uuid: uuid,
//     time_required,
//     answers,
//   };

//   return exerciseSubmissionPayload;
// };
export const TransformExerciseToPayloadExerciseSubmission = (
  exercise: TExerciseDetail,
  time_left: number,
): TAddExerciseSubmissionPayload => {
  const { uuid, time, questions } = exercise;

  const total_time_in_seconds = time * 600000; // Mengubah time dari menit ke detik
  const time_required = formatSecondToTime(total_time_in_seconds - time_left);
  console.log(total_time_in_seconds, time_required);

  const transformedQuestions = questions.map((question) => {
    const { uuid, choices, user_answer, score, sub_module_id } = question;
    const options = choices.map((choice) => ({
      id: choice.id, // Asumsikan id adalah string angka yang perlu diubah ke number
      text: choice.content,
    }));
    return {
      id: question.id, // Asumsikan uuid bisa diubah menjadi number untuk id
      uuid,
      sub_module_id,
      options,
      user_answer: user_answer ? user_answer : "",
      score,
    };
  });

  const exerciseSubmissionPayload: TAddExerciseSubmissionPayload = {
    exercise_uuid: uuid,
    time_required,
    questions: transformedQuestions,
  };
  return exerciseSubmissionPayload;
};

const formatTime = (totalTime: number): string => {
  // Implementasi format waktu di sini, contoh: konversi detik menjadi HH:MM:SS
  return "00:00:00";
};

export default TransformQuizToPayloadQuizSubmission;
