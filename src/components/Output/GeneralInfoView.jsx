import { GeneralInfoForm } from "../Forms/GeneralInfoForm";
import { useCV } from "../../UseCV";

function GeneralInfoView() {
  const { generalInfo, setGeneralInfo } = useCV();

  return (
    <div>
      <h1>General Info</h1>
      <GeneralInfoForm formData={generalInfo} setFormData={setGeneralInfo} />
    </div>
  );
}

export { GeneralInfoView };
