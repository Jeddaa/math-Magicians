/* eslint-disable react/prop-types */
export default function Button({ className, value }) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}
