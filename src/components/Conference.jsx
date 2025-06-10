import React, {useState} from 'react'
import PersonalInfo from "./steps/PersonalInfo";
import ContactInfo from "./steps/ContactInfo";
import ChurchInfo from "./steps/ChurchInfo";
import ReviewSubmit from "./steps/ReviewSubmit";
import Welcome from './steps/Welcome';

const steps = [
  Welcome,
  PersonalInfo,
  ContactInfo,
  ChurchInfo,
  ReviewSubmit,
];

const conference = () => {

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    parish: "",
    area: "",
    designation: "",
  });

   const next = (data) => {
    setFormData({ ...formData, ...data });
    setStep((s) => s + 1);
  };

  const prev = () => setStep((s) => s - 1);

  const CurrentStep = steps[step];
  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white rounded shadow">
      <CurrentStep
        data={formData}
        next={next}
        prev={prev}
        isFirst={step === 0}
        isLast={step === steps.length - 1}
      />
    </div>
  )
}

export default conference