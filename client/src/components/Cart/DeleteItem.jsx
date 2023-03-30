import React from 'react'

const DeleteItem = ({ productDeleted, deleteProductCart, notDeleteProductCart}) => {
  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10 border border-slate-300 p-2">
                                <img src={productDeleted.productImage} alt="productImage" />
                            </div>
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Are you sure you want to remove this product from the cart?</h3>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button 
                            type="button" 
                            class="inline-flex w-full justify-center rounded-md bg-green-600 hover:bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                            onClick={notDeleteProductCart}
                            >
                            No
                        </button>
                        <button 
                            type="button" 
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={()=>deleteProductCart(productDeleted.idProduct)}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default DeleteItem
