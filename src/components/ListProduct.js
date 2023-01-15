import React, { useState } from "react";
import ListProductsIteam from "./ListProductsIteam";

const ListProduct = () => {
  const [data, setData] = useState(ListProductsIteam);
  const filterResult = (cateItem) => {
    const result = ListProductsIteam.filter((currData) => {
      return currData.product_category_name === cateItem;
    });
    setData(result);
  };

  return (
    <>
      <h1 className="text-center text-info">My App</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <h1>Category</h1>
          <div className="col-md-3">
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => filterResult("Boys")}
            >
              Boys
            </button>
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => filterResult("Ladies")}
            >
              Ladies
            </button>
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => filterResult("Kids")}
            >
              Kids
            </button>
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => filterResult("Girls")}
            >
              Girls
            </button>
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => filterResult("Gents Giant")}
            >
              Gents Giant
            </button>
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => filterResult("Ladies Giant")}
            >
              Ladies Giant
            </button>
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => filterResult("Gents")}
            >
              Gents
            </button>
            <button
              type="button"
              class="btn btn-primary w-100 mb-4"
              onClick={() => setData(ListProductsIteam)}
            >
              All
            </button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values, index) => {
                return (
                  <>
                    <div className="col-md-4 mb-4" key={data[index].product_id}>
                      <div class="card">
                        <img
                          src="./BlueBMW.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            {data[index].product_brand_name}
                          </h5>
                          <p class="card-text">
                            {data[index].product_model_name}
                          </p>
                          <p class="card-text">{data[index].product_price}</p>

                          <p class="card-text">
                            {data[index].product_subtitle}
                          </p>

                          <button class="btn btn-dark">But now</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
