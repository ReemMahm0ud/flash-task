import "./App.css";
import { Button } from "./components/Button";
import { InputField } from "./components/InputField";
import { DiscountBanner } from "./components/DiscountBanner";

function App() {
  return (
    // <div className="h-screen flex items-center justify-center">
    //   <div className="border-2 rounded-lg">
    //     <div className="flex flex-col justify-start  items-baseline">
    //       <div>
    //         <svg
    //           width="42"
    //           height="30"
    //           viewBox="0 0 42 30"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M0.325045 23.0933C0.119694 23.2954 0.00281041 23.5707 5.00214e-05 23.859C-0.00271036 24.1472 0.108875 24.4248 0.310319 24.6307L5.67333 30L19.4257 16.2316C19.7886 15.8738 19.9951 15.3866 19.9999 14.8767C20.0047 14.3668 19.8075 13.8758 19.4515 13.5112L5.95602 0L0.490681 5.4717C0.286621 5.67403 0.170839 5.94899 0.168632 6.23651C0.166425 6.52404 0.277976 6.80075 0.478906 7.00619L8.4163 14.9926L0.325045 23.0933Z"
    //             fill="#CBF15E"
    //           />
    //           <path
    //             d="M22.325 23.0933C22.1197 23.2954 22.0028 23.5707 22.0001 23.859C21.9973 24.1472 22.1089 24.4248 22.3103 24.6307L27.6733 30L41.4257 16.2316C41.7886 15.8738 41.9951 15.3866 41.9999 14.8767C42.0047 14.3668 41.8075 13.8758 41.4515 13.5112L27.956 0L22.4907 5.4717C22.2866 5.67403 22.1708 5.94899 22.1686 6.23651C22.1664 6.52404 22.278 6.80075 22.4789 7.00619L30.4163 14.9926L22.325 23.0933Z"
    //             fill="#CBF15E"
    //           />
    //         </svg>
    //       </div>
    //       <div className="align-baseline">
    //         <span className="align-baseline">Hey there!</span>{" "}
    //         <span className="align-baseline">Pay with Flash!</span>
    //       </div>
    //       <div>input</div>
    //       <div>banner</div>
    //       <div>button</div>
    //     </div>
    //   </div>
    // </div>

    <body className="bg-white flex justify-end items-center min-h-screen">
      <div
        className="bg-white px-8 py-8  border-2 rounded-2xl"
        style={{ width: "780px" }}
      >
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-between  gap-4">
            <div className="flex space-x-2 mb-6">
              <svg
                width="42"
                height="30"
                viewBox="0 0 42 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.325045 23.0933C0.119694 23.2954 0.00281041 23.5707 5.00214e-05 23.859C-0.00271036 24.1472 0.108875 24.4248 0.310319 24.6307L5.67333 30L19.4257 16.2316C19.7886 15.8738 19.9951 15.3866 19.9999 14.8767C20.0047 14.3668 19.8075 13.8758 19.4515 13.5112L5.95602 0L0.490681 5.4717C0.286621 5.67403 0.170839 5.94899 0.168632 6.23651C0.166425 6.52404 0.277976 6.80075 0.478906 7.00619L8.4163 14.9926L0.325045 23.0933Z"
                  fill="#CBF15E"
                />
                <path
                  d="M22.325 23.0933C22.1197 23.2954 22.0028 23.5707 22.0001 23.859C21.9973 24.1472 22.1089 24.4248 22.3103 24.6307L27.6733 30L41.4257 16.2316C41.7886 15.8738 41.9951 15.3866 41.9999 14.8767C42.0047 14.3668 41.8075 13.8758 41.4515 13.5112L27.956 0L22.4907 5.4717C22.2866 5.67403 22.1708 5.94899 22.1686 6.23651C22.1664 6.52404 22.278 6.80075 22.4789 7.00619L30.4163 14.9926L22.325 23.0933Z"
                  fill="#CBF15E"
                />
              </svg>
            </div>
            <div className="grid grid-cols-1  justify-items-start">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Hey there!
              </h1>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Pay with Flash!
              </h2>
            </div>

            <div className="grid grid-cols-1  justify-items-start">
              <InputField />
            </div>

            {/* <div className="grid grid-cols-1 justify-items-start "> */}
            <DiscountBanner />
            <Button />
            {/* </div> */}
          </div>
        </div>
        {/* <div className="flex flex-col items-start">
          <div className="flex space-x-2 mb-6">
            <div className="text-lime-500 text-3xl">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="text-lime-500 text-3xl">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">Hey there!</h1>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Pay with Flash!
          </h2>

          <label htmlFor="phone-number" className="text-lg text-gray-700 mb-2">
            What's your number?
          </label>
          <input
            type="text"
            id="phone-number"
            placeholder="01xxxxxxxxx"
            className="w-full p-3 border border-lime-500 rounded-lg mb-2 text-gray-700"
          />

          <p className="text-sm text-gray-500 mb-4">
            Enter the number linked to your Flash account.
          </p>

          <div className="bg-lime-100 text-lime-700 p-3 rounded-lg flex items-center mb-6">
            <i className="fas fa-tags text-lime-500 mr-2"></i>
            <span>Get 20% off on your first payment</span>
          </div>

          <button className="bg-blue-900 text-white text-lg py-3 px-6 rounded-lg w-full">
            Next
          </button>
        </div> */}
      </div>
    </body>
  );
}

export default App;
