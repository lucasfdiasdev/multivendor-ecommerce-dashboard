import Image from "next/image";

const OrderIdAdminPage = () => {
  return (
    <main className="px-4 md:px-8 py-4 space-y-8">
      <div className="w-full p-2 border rounded-md">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl">Order details</h2>
          <select
            id=""
            name=""
            className="px-4 py-2 hover:border-indigo-500 outline-none bg-transparent border rounded-md cursor-pointer"
          >
            <option value="">pending</option>
            <option value="">processing</option>
            <option value="">warehouse</option>
            <option value="">placed</option>
            <option value="">cancell</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg">
            <h2>#eec2wa3d2a15487w12</h2>
            <span>3 jun 2023</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[32%]">
              <div className="pr-3 text-xl">
                <div className="flex flex-col gap-3">
                  <h3 className="pb-2 font-semibold">
                    Deliver to: Sheikh Farid
                  </h3>
                  <p className="text-sm">
                    Rangpur, kurigran nageshari house, no #514511
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h3 className="">Payment Status:</h3>
                  <p className="text-base">Cancell</p>
                </div>
                <span>Price: R$ 55,69</span>

                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      width={40}
                      height={40}
                      src={
                        "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt="Image"
                    />
                    <div>
                      <h2>Long long T-5</h2>
                      <p>
                        <span>Brand: Easy</span>,<span>Quantity: 2</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderIdAdminPage;
