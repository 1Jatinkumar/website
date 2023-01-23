import React from 'react';
import { Card } from 'primereact/card';
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import './styles/webstory.css';
import { useRef } from "react";
import { FileUpload } from "primereact/fileupload";




export const WebStoryGenrator = () => {

    const toast = useRef(null);
    const onUpload = () => {
        toast.current.show({
            severity: "info",
            summary: "Success",
            detail: "File Uploaded"
        });
    };
    const [value2, setValue2] = useState("");

    console.log(value2);
    return (
        <>
            <Card title='Web Story Genrator' className='bg-bluegray-900' style={{ minHeight: '745px' }}>
                <div style={{ backgroundColor: 'white', padding: "1px 5rem", borderRadius: '5px', textAlign: 'center' }}>
                    <h5>Enter Your Article</h5>
                    <InputTextarea style={{ boxShadow: '0px 0px 2px 0px blue' }} onUpload={onUpload} value={value2} onChange={(e) => setValue2(e.target.value)} rows={5} cols={100} autoResize />


                    <div>
                        <div className="card">
                            <h5>Upload Text file</h5>
                            <form action="http://ec2-35-174-155-55.compute-1.amazonaws.com:5003/endpoint" enctype="multipart/form-data" method='post'>
                                <FileUpload
                                    method='post'
                                    name="demo[]"
                                    url=""
                                    onUpload={onUpload}
                                    multiple
                                    accept="*"
                                    maxFileSize={1000000}
                                    emptyTemplate={
                                        <p className="m-0">Drag and drop files to here to upload.</p>
                                    }
                                />
                                

                            </form>


                            <form action="http://ec2-35-174-155-55.compute-1.amazonaws.com:5003/endpoint" method="POST" enctype="multipart/form-data">

                            <FileUpload
                                    method='post'
                                    name="demo[]"
                                    url=""
                                    onUpload={onUpload}
                                    multiple
                                    accept="*"
                                    maxFileSize={1000000}
                                    emptyTemplate={
                                        <p className="m-0">Drag and drop files to here to upload.</p>
                                    }
                                />

                                <input type="file" name="file" />
                                <input type="submit" />
                            </form>


                        </div>
                    </div>
                </div>
            </Card>



            {/* <div style={{ textAlign: 'center' }} className="card" >
                
            </div> */}



        </>
    )

}
