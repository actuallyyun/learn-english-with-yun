import utilStyles from "../styles/utils.module.css";

const Prose = () => {
  return (
    <div class="pb-14 md:pb-24 max-w-4xl m-auto px-3">
      <p class="text-xl font-light text-slate-800 ">
        If what you have tried has not worked, you might want to try a different
        method. Ever so often when we feel we can't learn, the problem lies in
        the method.
      </p>
    </div>
  );
};

const List = () => {
  return (
    <div class="grid grid-cols-2 justify-items-start md:grid-cols-4">
      <div class="m-auto md:max-w-4xl ">
        <ul>
          <li class="flex flex-row justify-start pb-3">
            <span class="mr-3 flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffc8dd"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </span>
            <p class="text-2xl font-semibold">Ask</p>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Why learn English</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">What to improve</span>
          </li>

          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">How much time I have</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Where I am now</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">What's interesting</span>
          </li>
        </ul>
      </div>
      <div class="m-auto max-w-xl md:max-w-4xl">
        <ul>
          <li class="mb-3 flex flex-row justify-start">
            <span class="mr-3 flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#fde047"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </span>
            <p class="text-2xl font-semibold">Plan</p>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Short-term plan</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Long-term plan</span>
          </li>

          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">What to do today</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">What to do this week</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Where to start</span>
          </li>
        </ul>
      </div>
      <div class="m-auto max-w-xl md:max-w-4xl">
        <ul>
          <li class="mb-3 flex flex-row justify-start">
            <span class="mr-3 flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#84cc16"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </span>
            <p class="text-2xl font-semibold">Act</p>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Pick a method</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">See how it works</span>
          </li>

          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Keep a learning journal</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Use the language</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Build a routine</span>
          </li>
        </ul>
      </div>
      <div class="m-auto max-w-xl md:max-w-4xl">
        <ul>
          <li class="mb-3 flex flex-row justify-start">
            <span class="mr-3 flex flex-col justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#a2d2ff"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </span>
            <p class="text-2xl font-semibold">Feedback</p>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">How motivated I am?</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Like & dislike</span>
          </li>

          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Happy with the progress?</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">Enjoying it?</span>
          </li>
          <li class="flex flex-row justify-start pb-2">
            <span class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#3E45EB"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="">What's next</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const NewMethods = () => {
  return (
    <div className="max-w-2xl md:max-w-6xl pt-11">
      <Prose />
      <List />
    </div>
  );
};

export default NewMethods;
