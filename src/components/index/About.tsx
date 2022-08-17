/* eslint-disable tailwindcss/no-custom-classname */
export default function About() {
  return (
    <div>
      <div className="container mx-auto mt-32 flex h-full flex-col items-center justify-between rounded-[2.5rem] bg-light_green-500 px-2">
        <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-between">
          <h2 className="mt-14 text-sm font-medium uppercase tracking-tight text-indigo-500">
            Who We Are
          </h2>
          <h3 className="mt-2 max-w-2xl text-center text-3xl font-extrabold leading-tight text-gray-900 sm:px-0 sm:text-5xl">
            About Us
          </h3>
          <div className="mt-0 flex w-full flex-col sm:mt-10 lg:my-2 lg:flex-row">
            <div className="mx-auto mb-0 w-full max-w-md p-4 sm:mb-16 lg:mb-0 lg:w-1/3 ">
              <div className="relative mr-5 flex h-full flex-col items-center justify-center rounded-[2.5rem] bg-white p-20 px-10">
                <svg
                  className="relative h-20 w-20"
                  viewBox="0 0 58 58"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="linearGradient-1TriangleIcon1"
                    >
                      <stop stopColor="#9C09DB" offset="0%" />
                      <stop stopColor="#1C0FD7" offset="100%" />
                    </linearGradient>
                    <filter
                      x="-14%"
                      y="-10%"
                      width="128%"
                      height="128%"
                      filterUnits="objectBoundingBox"
                      id="filter-3TriangleIcon1"
                    >
                      <feOffset
                        dy="2"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />
                      <feGaussianBlur
                        stdDeviation="2"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.141176471 0 0 0 0 0.031372549 0 0 0 0 0.501960784 0 0 0 0.15 0"
                        in="shadowBlurOuter1"
                      />
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2TriangleIcon1"
                    />
                  </defs>
                  <g
                    id="Page-1TriangleIcon1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Desktop-HDTriangleIcon1"
                      transform="translate(-291 -1278)"
                    >
                      <g
                        id="FeaturesTriangleIcon1"
                        transform="translate(170 915)"
                      >
                        <g
                          id="Group-9TriangleIcon1"
                          transform="translate(0 365)"
                        >
                          <g
                            id="Group-8TriangleIcon1"
                            transform="translate(125)"
                          >
                            <g id="Rectangle-9TriangleIcon1">
                              <use
                                fill="#000"
                                filter="url(#filter-3TriangleIcon1)"
                                xlinkHref="#path-2TriangleIcon1"
                              />
                              <use
                                fill="url(#linearGradient-1TriangleIcon1)"
                                xlinkHref="#path-2TriangleIcon1"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <h4 className="relative mt-6 text-lg font-bold">Our Vision</h4>
                <p className="relative mt-2 text-center text-base text-gray-600">
                  Transforming Climate Innovation Ecosystems through Inclusive
                  Transdisciplinarity (TransCIIT) project
                </p>
                <a
                  href="#_"
                  className="relative mt-2 flex text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="mx-auto mb-0 w-full max-w-md p-4 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative mr-5 flex h-full flex-col items-center justify-center rounded-[2.5rem] bg-white p-20 px-10">
                <svg
                  className="relative h-20 w-20"
                  viewBox="0 0 58 58"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="linearGradient-1Icon2"
                    >
                      <stop stopColor="#F2C314" offset="0%" />
                      <stop stopColor="#FC3832" offset="100%" />
                    </linearGradient>
                    <filter
                      x="-14%"
                      y="-10%"
                      width="128%"
                      height="128%"
                      filterUnits="objectBoundingBox"
                      id="filter-3Icon2"
                    >
                      <feOffset
                        dy="2"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />
                      <feGaussianBlur
                        stdDeviation="2"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.501960784 0 0 0 0 0.125490196 0 0 0 0 0 0 0 0 0.15 0"
                        in="shadowBlurOuter1"
                      />
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2Icon2"
                    />
                  </defs>
                  <g
                    id="Page-1Icon2"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="Desktop-HDIcon2" transform="translate(-691 -1278)">
                      <g id="FeaturesIcon2" transform="translate(170 915)">
                        <g
                          id="Group-9-CopyIcon2"
                          transform="translate(400 365)"
                        >
                          <g id="Group-8Icon2" transform="translate(125)">
                            <g id="Rectangle-9Icon2">
                              <use
                                fill="#000"
                                filter="url(#filter-3Icon2)"
                                xlinkHref="#path-2Icon2"
                              />
                              <use
                                fill="url(#linearGradient-1Icon2)"
                                xlinkHref="#path-2Icon2"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">Our Mission</h4>
                <p className="relative mt-2 text-center text-base text-gray-600">
                  Transforming Climate Innovation Ecosystems through Inclusive
                  Transdisciplinarity (TransCIIT) project
                </p>
                <a
                  href="#_"
                  className="relative mt-2 flex text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="mx-auto mb-16 w-full max-w-md p-4 lg:mb-0 lg:w-1/3">
              <div className="relative mr-5 flex h-full flex-col items-center justify-center rounded-[2.5rem] bg-white p-20 px-10">
                <svg
                  className="relative h-20 w-20"
                  viewBox="0 0 58 58"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="linearGradient-1Icon3"
                    >
                      <stop stopColor="#32FBFC" offset="0%" />
                      <stop stopColor="#3214F2" offset="100%" />
                    </linearGradient>
                    <filter
                      x="-14%"
                      y="-10%"
                      width="128%"
                      height="128%"
                      filterUnits="objectBoundingBox"
                      id="filter-3Icon3"
                    >
                      <feOffset
                        dy="2"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />
                      <feGaussianBlur
                        stdDeviation="2"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.031372549 0 0 0 0 0.149019608 0 0 0 0 0.658823529 0 0 0 0.15 0"
                        in="shadowBlurOuter1"
                      />
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2Icon3"
                    />
                  </defs>
                  <g
                    id="Page-1Icon3"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="Desktop-HDIcon3" transform="translate(-1091 -1278)">
                      <g id="FeaturesIcon3" transform="translate(170 915)">
                        <g
                          id="Group-9-Copy-2Icon3"
                          transform="translate(800 365)"
                        >
                          <g id="Group-8Icon3" transform="translate(125)">
                            <g id="Rectangle-9Icon3">
                              <use
                                fill="#000"
                                filter="url(#filter-3Icon3)"
                                xlinkHref="#path-2Icon3"
                              />
                              <use
                                fill="url(#linearGradient-1Icon3)"
                                xlinkHref="#path-2Icon3"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">Core Values</h4>
                <p className="relative mt-2 text-center text-base text-gray-600">
                  Transforming Climate Innovation Ecosystems through Inclusive
                  Transdisciplinarity (TransCIIT) project
                </p>
                <a
                  href="#_"
                  className="relative mt-2 flex text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
