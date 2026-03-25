import { a4 as n } from "./entry.8aa394d7.js";
import { F as s } from "./IFaculty.97f6e59d.js";
const u = {
    faculty_introduction: "institute_introduction",
    faculty_overview: "institute_overview",
    student: "trainee",
    alumni: "former_trainee",
    student_experience: "trainee_experience",
    faculty_research_topics_student: "faculty_research_topics_trainee",
  },
  o = () => {
    const { facultyCode: a } = n();
    return {
      transformKeyTranslateLanguage: (e, r) => {
        let t = e;
        return a.value === s.IPIC && (t = u[e] || e), r ? `${t}.${r}` : t;
      },
    };
  },
  _ = o;
export { _ as u };
