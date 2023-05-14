import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function SignInModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Sign In
                </Dialog.Title>
                <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                      class="mx-auto h-10 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign in to your account
                    </h2>
                  </div>

                  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div class="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <label
                            for="password"
                            class="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Password
                          </label>
                          <div class="text-sm">
                            <a
                              href="#"
                              class="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div class="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                      Not a member?
                      <a
                        href="#"
                        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Start a 14 day free trial
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
