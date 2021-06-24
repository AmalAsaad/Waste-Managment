// import './ContactUs.css';
// import styles from "./ContactUs.css";
import styles from './ContactUs.module.css'; 
import  Footer from "./Footer";

const ContactUs = () => {



    return (
        <>
            <div className={styles['form-container']}>
                <span className={styles['close-btn']}>×</span>
                <div className={styles['form-content-right']}>
                    <form className={styles['form']}>
                        <h1>
                           Contact Us 
                        </h1>
                        <div className={styles['form-inputs']}>
                            <label className={styles['form-label']}>Email</label>
                            <input
                                className={styles['form-input']}
                                type='text'
                                name='username'
                                placeholder='Enter your username'
                            // value={UserName}
                            // onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className={styles['form-inputs']}>
                            <label className={styles['form-label']}>message</label>
                            <input
                                className={styles['form-input']}
                                type='text'
                                name='message'
                                placeholder='Enter your message'
                            // value={Password}
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className={styles['form-input-btn']} type='submit'>
                            Send
                        </button>
                     
                    </form>
                </div>
            </div>
            <Footer/>

            {/* <div className="container mx-auto my-20 w-1/3  bg-green-50">
                <div className="my-3  mx-auto">
                    <h1 className=" hover:bg-red-400 text-center mt-35  font-semibold justify-center text-white bg-green-500 py-2 w-40   rounded-md">
                        Contact Us
                    </h1>
                </div>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-green-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div> */}
        </>
    )
};
export default ContactUs