import { useCV } from "../../UseCV";

function GeneralInfoForm() {
  const { generalInfo, setGeneralInfo } = useCV();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={generalInfo.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={generalInfo.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={generalInfo.phoneNumber}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={generalInfo.address}
          onChange={handleChange}
          placeholder="Enter address"
        />
      </div>
    </form>
  );
}

export { GeneralInfoForm };
