import React, { useContext, useEffect } from "react";
import StoreContext from "../../../context/Store/StoreContext";
import { Link, useParams } from "react-router-dom";

export default function SingleStore() {
  const ctx = useContext(StoreContext);
  const { singleStore, getStore } = ctx;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getStore(id);
  }, []);

  return (
    <>
      <div className="bg-white">

        <div class="mt-4 flex md:mt-0">
          <Link to={`/stores/${id}/editar`}>
            <button
              type="button"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Editar tienda
            </button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2"></ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {singleStore.nombre}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Información de la tienda
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {singleStore.domicilio}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">
                  {singleStore.telefono}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
