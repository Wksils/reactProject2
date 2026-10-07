import './faqStyle.scss'
import { useState } from 'react'

export default function faq(){
    const [open, setOpen] = useState(null);
    const toggle = (n) => setOpen(open === n ? null : n);
    const itemClass = (n) => (open === n ? "faq__item faq__item--open" : "faq__item");
    return(
        <>
        <section className='P1_section8'>
            <div className='cont'>
                <h2 className="faq__title">FAQ</h2>
        
                <div className={itemClass(1)}>
                    <button className="faq__question" onClick={() => toggle(1)} aria-expanded={open === 1}>
                    <span>How long does delivery take?</span>
                    <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Usually 30–45 minutes, depending on the distance and how busy the
                        kitchen is. You will see the estimated time before you confirm
                        the order.
                        </p>
                    </div>
                    </div>
                </div>
            
                <div className={itemClass(2)}>
                    <button className="faq__question" onClick={() => toggle(2)} aria-expanded={open === 2}>
                    <span>Can I change or cancel my order?</span>
                    <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Yes, until the kitchen starts cooking. Call us as soon as
                        possible and we will update or cancel the order for you.
                        </p>
                    </div>
                    </div>
                </div>
            
                <div className={itemClass(3)}>
                    <button className="faq__question" onClick={() => toggle(3)} aria-expanded={open === 3}>
                    <span>What payment methods do you accept?</span>
                    <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        You can pay online by card or in cash to the courier when the
                        order arrives.
                        </p>
                    </div>
                    </div>
                </div>
            
                <div className={itemClass(4)}>
                    <button className="faq__question" onClick={() => toggle(4)} aria-expanded={open === 4}>
                    <span>Do you have vegetarian dishes?</span>
                    <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Yes, several dishes in every category are vegetarian. Choose a
                        category in the menu above to see them.
                        </p>
                    </div>
                    </div>
                </div>
            
                <div className={itemClass(5)}>
                    <button className="faq__question" onClick={() => toggle(5)} aria-expanded={open === 5}>
                    <span>How can I contact support?</span>
                    <span className="faq__icon">+</span>
                    </button>
                    <div className="faq__answer">
                    <div className="faq__answer-inner">
                        <p>
                        Write to us by email or call the number at the bottom of the
                        page. We answer every day from 10:00 to 22:00.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}