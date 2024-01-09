export default function (props) {
  return (
    <button className="w-full text-left flex" onClick={props.onClick}>
      <span className="mr-4 font-normal text-yellow-400">#</span>
      {props.name}
    </button>
  );
}
