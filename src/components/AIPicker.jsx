import React from "react";

import CustomButton from "./CustomButton"

export const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className="aipicker-container">

            <h2 className="font-bold">WITHOUT CREDTIS FOR USE THE AI DALL·E! BUT TRY IMPORT SOME IMAGES AND SEE THE POWER OF THIS APPLICATION!</h2>

            {/* <div className="flex flex-wrap gap-3">
                {generatingImg ? (
                    <CustomButton
                        type="outline"
                        title="Asking AI..."
                        customStyles="text-xs"
                    />
                ) : (
                    <>

                        <CustomButton
                            type="outline"
                            title="AI Logo"
                            handleClick={() => handleSubmit('logo')}
                            customStyles="text-xs"
                        />

                        <CustomButton
                            type="filled"
                            title="AI Full"
                            handleClick={() => handleSubmit('full')}
                            customStyles="text-xs"
                        />
                    </>
                )}
            </div> */}

        </div>
    );
};
