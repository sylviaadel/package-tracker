export default function UserDropdown() {
  var storedPackages = JSON.parse(localStorage.getItem("MyPackages"));
  let currentPackage = storedPackages[0];
  return (
    <ul className="user-dropdown">
      <li>
        <h3>Name:</h3>
        {currentPackage.user_name}
      </li>
      <li>
        <h3>Phone:</h3>
        {currentPackage.user_phone}
      </li>
    </ul>
  );
}
