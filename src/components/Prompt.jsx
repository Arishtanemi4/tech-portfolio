const Prompt = ({ path = "~", command = "" }) => {
  return (
    <div className="flex items-center mb-2 flex-wrap">
      <span className="text-term-cyan mr-2">root@portfolio</span>
      <span className="text-term-gray mr-2">:</span>
      <span className="text-blue-400 mr-2">{path}$</span>
      {command && <span className="text-term-green">{command}</span>}
    </div>
  );
};

export default Prompt;