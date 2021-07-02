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
              
                            />
                        </div>

                        <div className={styles['form-inputs']}>
                            <label className={styles['form-label']}>message</label>
                            <input
                                className={styles['form-input']}
                                type='text'
                                name='message'
                                placeholder='Enter your message'
               
                            />
                        </div>

                        <button className={styles['form-input-btn']} type='submit'>
                            Send
                        </button>
                     
                    </form>
                </div>
            </div>
            <Footer/>         
        </>
    )
};
export default ContactUs