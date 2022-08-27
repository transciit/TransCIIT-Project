export default function StepperControl({
  handleClick,
  currentStep,
  steps,
  done,
}) {
  if (done) {
    return (
      <div className="container mt-4 flex justify-around">
        <button
          onClick={() => handleClick()}
          className={`mr-2 mb-2 w-full rounded-lg border border-gray-800 px-5 py-2.5 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300  ${
            currentStep === 1 ? 'hidden cursor-not-allowed opacity-50' : 'block'
          }`}
        >
          Back
        </button>

        <button
          onClick={() => handleClick('next')}
          className="mr-2 mb-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 "
        >
          {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
        </button>
      </div>
    );
  }
  return null;
}
