import React, { useState } from "react";
import { FaTrash, FaSearch } from 'react-icons/fa';

const Content = () => {
    const [codigo, setCodigo] = useState("");
    const [fecha, setFecha] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null); // Store the PDF URL
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct the PDF file URL based on the entered verification code
        const fileUrl = `/assets/Files/${codigo}.pdf`;
        console.log("Fetching file from URL:", fileUrl);
        
        // Check if the file exists
        fetch(fileUrl)
            .then((response) => {
                console.log("Response status:", response.status); // Log the response status
                if (response.ok) {
                    setPdfUrl(fileUrl); // Set the file URL if found
                } else {
                    setPdfUrl(null); // Handle case where file is not found
                    alert("File not found. Please check the verification code.");
                }
            })
            .catch((error) => {
                setPdfUrl(null);
                alert("An error occurred while fetching the file.");
                console.error("Error fetching the file:", error);
            });
    };
    
    

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center py-0.5">
            <div className="bg-white p-6 rounded-lg  w-full max-w-4xl">
                {/* Information Section */}
                <div className="bg-blue-100 p-4 rounded-lg mb-6 flex items-center">
                    <span className="text-2xl mr-3 text-blue-600">ℹ️</span>
                    <p className="text-sm text-gray-700">
                        Para realizar la consulta del documento expedido por el Ministerio
                        de Relaciones Exteriores, diligencie el código de verificación del
                        documento y la fecha de expedición.
                    </p>
                </div>

                {/* Form Title */}
                <h1 className="text-2xl font-semibold text-gray-500 mb-6">
                    Consultar Documento Trámite
                </h1>
                <p className="text-end text-gray-400">*Campos obligatorios</p>
                <hr className="my-12 h-[0.5px] border-t-0 bg-gray-700" />

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Datos del Documento */}
                    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Código de Verificación */}
                        <div>
                            <label
                                htmlFor="codigo"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Código de Verificación *
                            </label>
                            <input
                                type="text"
                                id="codigo"
                                name="codigo"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>

                        {/* Fecha de Expedición */}
                        <div>
                            <label
                                htmlFor="fecha"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Fecha de Expedición *
                            </label>
                            <input
                                type="date"
                                id="fecha"
                                name="fecha"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />

                        </div>

                    </div>
                    <hr class="my-12 h-[0.5px] border-t-0 bg-gray-700" />


                    {/* Privacy Notice */}
                    <div className="text-gray-600 text-sm mb-6">
                        <h2 className="font-semibold">
                            Privacy Notice and Authorization to handle personal data in the
                            Integrated Citizen Processes System – SITAC – in the Ministry of
                            Foreign Affairs
                        </h2>
                        <p className="mt-2 text-gray-700">
                            In order to comply with its obligations under law and contract, and to provide services as intended, the Ministry of Foreign Affairs and its Revolving Fund need to obtain certain information about you. This information includes your identity document, surname(s) and given name(s), demographic information, information on birth and residence; contact data and academic formation; it also includes biometric information (fingerprints, photo and signature) captured virtually or in person at the Ministry´s offices to continue with the service, process or product you want. The data are also needed to reply to inquiries, complaints, claims, suggestions, denunciations or congratulations. They are also used to locate you or your family and friends in the event of a natural disaster or emergency; this allows us to promote civic participation and the Ministry´s rendering of accounts on its performance or to request you to evaluate your perceptions of the processes and services that the Ministry and its Revolving Fund provide.
                        </p>
                        <p>
                            You authorize the Ministry of Foreign Affairs and its Revolving Fund to handle the information you provide here, specifically for it to be used for purposes proper to their mission. These purposes are materialized in the performance of activities to provide their services, processes or products such as consular records, apostilles and legalizations, passport and visa issues, nationality, judicial cooperation, certifications, the authorization of public deeds, notarial acts, Colombia Nos Une and processes not provided for an exclusive to diplomatic personnel.

                        </p>
                        Please note that your information may not be suppressed or revoked if you have a legal or contractual duty to keep it on the database.
                        You, as holder of Personal Data, may exercise your rights under Law 1581/2012 and its Regulatory Decrees, by writing to: Carrera 5 No 9 – 03 Bogotá, Colombia, under the heading Protection of Personal Data, Ministry of Foreign Affairs; or you can email: contactenos@cancilleria.gov.co
                        Your personal data can be emailed and/or transferred within the country or elsewhere. For further details about our Information Handling Policy and any important changes in it, please visit:
                        <a
                            href="#"
                            className="text-blue-600 hover:underline mt-2 block"
                        >
                            Personal Data Processing Policy
                        </a>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="mb-6">
                        <label className="inline-flex items-start text-gray-700">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                required
                            />
                            <span className="ml-2 text-sm">
                                I consent to the transfer of my personal data in the terms
                                indicated in this privacy notice. *
                            </span>
                        </label>
                    </div>
                    <hr class="my-12 h-[0.5px] border-t-0 bg-gray-700" />

                    <div className="flex mt-8">
                        <button
                            type="reset"
                            className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
                        >
                            <FaTrash className="mr-2" /> Limpiar
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ml-4 flex items-center justify-center"
                        >
                            <FaSearch className="mr-2" /> Buscar
                        </button>
                    </div>
                </form>

                {/* Display the PDF if available */}
                {pdfUrl && (
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold">Searched Document:</h2>
                        <iframe src={pdfUrl} title="Searched Document" className="mt-4 w-full h-96" />
                        <a href={pdfUrl} download className="text-blue-600 hover:underline mt-4 block">
                            Download PDF
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Content;
