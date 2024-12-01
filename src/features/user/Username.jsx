import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((store) => store.user.username);

  if (!username) return null;

  return (
    <div className="mt-3 flex justify-end text-sm font-semibold capitalize md:block xl:mt-0">
      Hi, <span className="uppercase">{username}</span>
    </div>
  );
}

export default Username;
