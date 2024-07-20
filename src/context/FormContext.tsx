import { createContext, ReactElement, useState } from "react";

type formDataType = {
  courseCode1: string;
  courseCode2: string;
  courseCode3: string;
  courseCode4: string;
  courseCode5: string;
  courseCode6: string;
  courseCode7: string;
  unit1: string;
  unit2: string;
  unit3: string;
  unit4: string;
  unit5: string;
  unit6: string;
  unit7: string;
  gradeUnit1: string;
  gradeUnit2: string;
  gradeUnit3: string;
  gradeUnit4: string;
  gradeUnit5: string;
  gradeUnit6: string;
  gradeUnit7: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
};

type secondSemesterFormDataType = {
  courseCode1: string;
  courseCode2: string;
  courseCode3: string;
  courseCode4: string;
  courseCode5: string;
  courseCode6: string;
  courseCode7: string;
  unit1: string;
  unit2: string;
  unit3: string;
  unit4: string;
  unit5: string;
  unit6: string;
  unit7: string;
  gradeUnit1: string;
  gradeUnit2: string;
  gradeUnit3: string;
  gradeUnit4: string;
  gradeUnit5: string;
  gradeUnit6: string;
  gradeUnit7: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
};

const secondSemesterInitState: secondSemesterFormDataType = {
  courseCode1: "",
  courseCode2: "",
  courseCode3: "",
  courseCode4: "",
  courseCode5: "",
  courseCode6: "",
  courseCode7: "",
  unit1: "",
  unit2: "",
  unit3: "",
  unit4: "",
  unit5: "",
  unit6: "",
  unit7: "",
  gradeUnit1: "",
  gradeUnit2: "",
  gradeUnit3: "",
  gradeUnit4: "",
  gradeUnit5: "",
  gradeUnit6: "",
  gradeUnit7: "",
  score1: "",
  score2: "",
  score3: "",
  score4: "",
  score5: "",
  score6: "",
  score7: ""
};

const initState: formDataType = {
  courseCode1: "",
  courseCode2: "",
  courseCode3: "",
  courseCode4: "",
  courseCode5: "",
  courseCode6: "",
  courseCode7: "",
  unit1: "",
  unit2: "",
  unit3: "",
  unit4: "",
  unit5: "",
  unit6: "",
  unit7: "",
  gradeUnit1: "",
  gradeUnit2: "",
  gradeUnit3: "",
  gradeUnit4: "",
  gradeUnit5: "",
  gradeUnit6: "",
  gradeUnit7: "",
  score1: "",
  score2: "",
  score3: "",
  score4: "",
  score5: "",
  score6: "",
  score7: ""
};

type useDataFormContextType = {
  formData: formDataType;
  secondSemesterFormData: secondSemesterFormDataType;
  setSecondSemesterFormData: React.Dispatch<
    React.SetStateAction<secondSemesterFormDataType>
  >;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
  handleChange: (e: any) => void;
  handleSecondSemesterChange: (e: any) => void;
  handleGPAClick: (e: any) => void;
  handleSecondSemsterCGPAClick: (e: any) => void;
  secondSemester: boolean;
  setSecondSemester: React.Dispatch<React.SetStateAction<boolean>>;
  showCGPAResult: boolean;
  setShowCGPAResult: React.Dispatch<React.SetStateAction<boolean>>;
  cgpaResult: string;
  setCgpaResult: React.Dispatch<React.SetStateAction<string>>;
  gpaResult: string;
  setGpaResult: React.Dispatch<React.SetStateAction<string>>;
  totalGradePoints: string;
  setTotalGradePoints: React.Dispatch<React.SetStateAction<string>>;
  totalNumberUnits: string;
  setTotalNumberUnits: React.Dispatch<React.SetStateAction<string>>;
  gradePoint: string;
  setGradePoint: React.Dispatch<React.SetStateAction<string>>;
  numberUnits: string;
  setNumberUnits: React.Dispatch<React.SetStateAction<string>>;
};
const useDataContext: any = {};

export const DataFormContext =
  createContext<useDataFormContextType>(useDataContext);

type ChidrenType = {
  children?: ReactElement;
};
export const DataFormContextProvider = ({ children }: ChidrenType) => {
  const [formData, setFormData] = useState(initState);
  const [secondSemesterFormData, setSecondSemesterFormData] = useState(
    secondSemesterInitState
  );
  const [secondSemester, setSecondSemester] = useState(false);
  const [showCGPAResult, setShowCGPAResult] = useState(false);
  const [cgpaResult, setCgpaResult] = useState("");
  const [gpaResult, setGpaResult] = useState("0.00");
  const [totalGradePoints, setTotalGradePoints] = useState("");
  const [totalNumberUnits, setTotalNumberUnits] = useState("");
  const [gradePoint, setGradePoint] = useState("0");
  const [numberUnits, setNumberUnits] = useState("0");

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSecondSemesterChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setSecondSemesterFormData((prev) => ({ ...prev, [name]: value }));
  };

  const semesterFormData = (
    selectData: any,
    selectResult: any,
    selectGradePoint: any,
    selectNumberUnits: any
  ) => {
    const units = [
      Number(selectData.unit1),
      Number(selectData.unit2),
      Number(selectData.unit3),
      Number(selectData.unit4),
      Number(selectData.unit5),
      Number(selectData.unit6),
      Number(selectData.unit7)
    ];
    const totalUnits = units.reduce((arr, val) => arr + val, 0);
    const gradeUnit1 =
      selectData.gradeUnit1 === "A"
        ? 5
        : selectData.gradeUnit1 === "B"
        ? 4
        : selectData.gradeUnit1 === "C"
        ? 3
        : selectData.gradeUnit1 === "D"
        ? 2
        : selectData.gradeUnit1 === "E"
        ? 1
        : selectData.gradeUnit1 === "F"
        ? 0
        : "";
    const gradeUnit2 =
      selectData.gradeUnit2 === "A"
        ? 5
        : selectData.gradeUnit2 === "B"
        ? 4
        : selectData.gradeUnit2 === "C"
        ? 3
        : selectData.gradeUnit2 === "D"
        ? 2
        : selectData.gradeUnit2 === "E"
        ? 1
        : selectData.gradeUnit2 === "F"
        ? 0
        : "";
    const gradeUnit3 =
      selectData.gradeUnit3 === "A"
        ? 5
        : selectData.gradeUnit3 === "B"
        ? 4
        : selectData.gradeUnit3 === "C"
        ? 3
        : selectData.gradeUnit3 === "D"
        ? 2
        : selectData.gradeUnit3 === "E"
        ? 1
        : selectData.gradeUnit3 === "F"
        ? 0
        : "";
    const gradeUnit4 =
      selectData.gradeUnit4 === "A"
        ? 5
        : selectData.gradeUnit4 === "B"
        ? 4
        : selectData.gradeUnit4 === "C"
        ? 3
        : selectData.gradeUnit4 === "D"
        ? 2
        : selectData.gradeUnit4 === "E"
        ? 1
        : selectData.gradeUnit4 === "F"
        ? 0
        : "";
    const gradeUnit5 =
      selectData.gradeUnit5 === "A"
        ? 5
        : selectData.gradeUnit5 === "B"
        ? 4
        : selectData.gradeUnit5 === "C"
        ? 3
        : selectData.gradeUnit5 === "D"
        ? 2
        : selectData.gradeUnit5 === "E"
        ? 1
        : selectData.gradeUnit5 === "F"
        ? 0
        : "";
    const gradeUnit6 =
      selectData.gradeUnit6 === "A"
        ? 5
        : selectData.gradeUnit6 === "B"
        ? 4
        : selectData.gradeUnit6 === "C"
        ? 3
        : selectData.gradeUnit6 === "D"
        ? 2
        : selectData.gradeUnit6 === "E"
        ? 1
        : selectData.gradeUnit6 === "F"
        ? 0
        : "";
    const gradeUnit7 =
      selectData.gradeUnit7 === "A"
        ? 5
        : selectData.gradeUnit7 === "B"
        ? 4
        : selectData.gradeUnit7 === "C"
        ? 3
        : selectData.gradeUnit7 === "D"
        ? 2
        : selectData.gradeUnit7 === "E"
        ? 1
        : selectData.gradeUnit7 === "F"
        ? 0
        : "";
    const totalGradeUnit = [
      gradeUnit1 && gradeUnit1 * Number(selectData.unit1),
      gradeUnit2 && gradeUnit2 * Number(selectData.unit2),
      gradeUnit3 && gradeUnit3 * Number(selectData.unit3),
      gradeUnit4 && gradeUnit4 * Number(selectData.unit4),
      gradeUnit5 && gradeUnit5 * Number(selectData.unit5),
      gradeUnit6 && gradeUnit6 * Number(selectData.unit6),
      gradeUnit7 && gradeUnit7 * Number(selectData.unit7)
    ].reduce((arr, val) => Number(arr) + Number(val), 0);
    const results = totalGradeUnit && Number(totalGradeUnit) / totalUnits;
    selectGradePoint(totalGradeUnit.toString());
    selectNumberUnits(totalUnits.toString());
    selectResult(Number(results).toFixed(2));
  };
  const handleGPAClick = (e: any) => {
    e.preventDefault();
    semesterFormData(formData, setGpaResult, setGradePoint, setNumberUnits);
  };
  const handleSecondSemsterCGPAClick = (e: any) => {
    e.preventDefault();
    setShowCGPAResult(true);
    console.log(secondSemesterFormData);
    const gradeUnit1 =
      secondSemesterFormData.gradeUnit1 === "A"
        ? 5
        : secondSemesterFormData.gradeUnit1 === "B"
        ? 4
        : secondSemesterFormData.gradeUnit1 === "C"
        ? 3
        : secondSemesterFormData.gradeUnit1 === "D"
        ? 2
        : secondSemesterFormData.gradeUnit1 === "E"
        ? 1
        : secondSemesterFormData.gradeUnit1 === "F"
        ? 0
        : "";
    const gradeUnit2 =
      secondSemesterFormData.gradeUnit2 === "A"
        ? 5
        : secondSemesterFormData.gradeUnit2 === "B"
        ? 4
        : secondSemesterFormData.gradeUnit2 === "C"
        ? 3
        : secondSemesterFormData.gradeUnit2 === "D"
        ? 2
        : secondSemesterFormData.gradeUnit2 === "E"
        ? 1
        : secondSemesterFormData.gradeUnit2 === "F"
        ? 0
        : "";
    const gradeUnit3 =
      secondSemesterFormData.gradeUnit3 === "A"
        ? 5
        : secondSemesterFormData.gradeUnit3 === "B"
        ? 4
        : secondSemesterFormData.gradeUnit3 === "C"
        ? 3
        : secondSemesterFormData.gradeUnit3 === "D"
        ? 2
        : secondSemesterFormData.gradeUnit3 === "E"
        ? 1
        : secondSemesterFormData.gradeUnit3 === "F"
        ? 0
        : "";
    const gradeUnit4 =
      secondSemesterFormData.gradeUnit4 === "A"
        ? 5
        : secondSemesterFormData.gradeUnit4 === "B"
        ? 4
        : secondSemesterFormData.gradeUnit4 === "C"
        ? 3
        : secondSemesterFormData.gradeUnit4 === "D"
        ? 2
        : secondSemesterFormData.gradeUnit4 === "E"
        ? 1
        : secondSemesterFormData.gradeUnit4 === "F"
        ? 0
        : "";
    const gradeUnit5 =
      secondSemesterFormData.gradeUnit5 === "A"
        ? 5
        : secondSemesterFormData.gradeUnit5 === "B"
        ? 4
        : secondSemesterFormData.gradeUnit5 === "C"
        ? 3
        : secondSemesterFormData.gradeUnit5 === "D"
        ? 2
        : secondSemesterFormData.gradeUnit5 === "E"
        ? 1
        : secondSemesterFormData.gradeUnit5 === "F"
        ? 0
        : "";
    const gradeUnit6 =
      secondSemesterFormData.gradeUnit6 === "A"
        ? 5
        : secondSemesterFormData.gradeUnit6 === "B"
        ? 4
        : secondSemesterFormData.gradeUnit6 === "C"
        ? 3
        : secondSemesterFormData.gradeUnit6 === "D"
        ? 2
        : secondSemesterFormData.gradeUnit6 === "E"
        ? 1
        : secondSemesterFormData.gradeUnit6 === "F"
        ? 0
        : "";
    const gradeUnit7 =
      secondSemesterFormData.gradeUnit7 === "A"
        ? 5
        : secondSemesterFormData.gradeUnit7 === "B"
        ? 4
        : secondSemesterFormData.gradeUnit7 === "C"
        ? 3
        : secondSemesterFormData.gradeUnit7 === "D"
        ? 2
        : secondSemesterFormData.gradeUnit7 === "E"
        ? 1
        : secondSemesterFormData.gradeUnit7 === "F"
        ? 0
        : "";
    const totalSecondSemesterGradeUnit = [
      gradeUnit1 && gradeUnit1 * +secondSemesterFormData.unit1,
      gradeUnit2 && gradeUnit2 * +secondSemesterFormData.unit2,
      gradeUnit3 && gradeUnit3 * +secondSemesterFormData.unit3,
      gradeUnit4 && gradeUnit4 * +secondSemesterFormData.unit4,
      gradeUnit5 && gradeUnit5 * +secondSemesterFormData.unit5,
      gradeUnit6 && gradeUnit6 * +secondSemesterFormData.unit6,
      gradeUnit7 && gradeUnit7 * +secondSemesterFormData.unit7
    ].reduce((arr, val) => +arr + +val, 0);
    const secondSemesterUnits = [
      Number(secondSemesterFormData.unit1),
      Number(secondSemesterFormData.unit2),
      Number(secondSemesterFormData.unit3),
      Number(secondSemesterFormData.unit4),
      Number(secondSemesterFormData.unit5),
      Number(secondSemesterFormData.unit6),
      Number(secondSemesterFormData.unit7)
    ].reduce((arr, val) => +arr + +val, 0);

    const totalNumberUnits = Number(numberUnits) + Number(secondSemesterUnits);
    const totalGradeUnits =
      Number(totalSecondSemesterGradeUnit) + Number(gradePoint);
    console.log(totalGradeUnits);
    setTotalGradePoints(totalGradeUnits.toString());
    setTotalNumberUnits(totalNumberUnits.toString());
    const CGPA_RESULT = (+totalGradeUnits / +totalNumberUnits).toFixed(2);

    console.log(CGPA_RESULT);
    setCgpaResult(CGPA_RESULT);
  };

  return (
    <DataFormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        secondSemesterFormData,
        setSecondSemesterFormData,
        handleSecondSemesterChange,
        secondSemester,
        setSecondSemester,
        showCGPAResult,
        setShowCGPAResult,
        cgpaResult,
        setCgpaResult,
        gpaResult,
        setGpaResult,
        totalGradePoints,
        setTotalGradePoints,
        totalNumberUnits,
        setTotalNumberUnits,
        gradePoint,
        setGradePoint,
        numberUnits,
        setNumberUnits,
        handleGPAClick,
        handleSecondSemsterCGPAClick
      }}
    >
      {children}
    </DataFormContext.Provider>
  );
};
