import React, { useEffect, useContext } from "react";
import GuitarContext from "./../../../context/Guitar/GuitarContext";

import { useParams } from "react-router-dom";

export default function Single() {
  const ctx = useContext(GuitarContext);
  const { singleGuitar, getGuitar } = ctx;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getGuitar(id);
  }, []);

  return (
    <div>
	 <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {singleGuitar.nombre}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  ${singleGuitar.precio}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{singleGuitar.descripcion}</p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={singleGuitar.imagen}
                alt="imagen de guitarra"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">

              <form>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Add to bag
                  </button>
                </div>

              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
