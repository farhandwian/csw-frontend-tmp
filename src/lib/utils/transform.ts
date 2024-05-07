import { TAddQuizSubmissionPayload, TQuiz } from "@/types/quiz/";

export const TransformQuizToPayloadQuizSubmission = (
  quiz: TQuiz,
  user_id: number,
  time_required: string,
): TAddQuizSubmissionPayload => {
  const { id, topic, modul, total_questions, total_time, questions } = quiz;

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

const formatTime = (totalTime: number): string => {
  // Implementasi format waktu di sini, contoh: konversi detik menjadi HH:MM:SS
  return "00:00:00";
};

export default TransformQuizToPayloadQuizSubmission;
