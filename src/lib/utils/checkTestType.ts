import { TTestType } from "@/types/index";
export function convertTestTypeIDToTittle(testTypeID: number) {
  if (testTypeID === 1) {
    return "latihan-soal";
  } else if (testTypeID === 2) {
    return "pretest";
  } else if (testTypeID === 3) {
    return "posttest";
  } else if (testTypeID === 4) {
    return "paket-soal";
  } else if (testTypeID === 5) {
    return "try-out";
  }
}

export function convertTestTypeTittleToID(testType: TTestType): number {
  if (testType === "latihan-soal") {
    return 1;
  } else if (testType === "pretest") {
    return 2;
  } else if (testType === "posttest") {
    return 3;
  } else if (testType === "paket-soal") {
    return 4;
  } else if (testType === "try-out") {
    return 5;
  }
  return 0;
}
