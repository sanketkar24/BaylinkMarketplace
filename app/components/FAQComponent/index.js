import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import './index.css'
import styles from './styles.module.css'
import chevronDown from "./chevron-down.svg";

import Image from "next/image";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <div className="header-faq">
        <div className="header-faq-heading">{header}</div>
        <Image
          className={styles.chevron}
          src={chevronDown}
          alt="Chevron Down"
        />
      </div>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);


export default function FAQAccordion() {
  return (
    <div className=" w-[90%] FaqPage-content-contaier">
      <div className="Faq-content">
        <div className={styles.accordion}>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem
              header="How can Baylink help my D2C brand expand into the retail market?"
              initialEntered
            >
              Baylink strategically positions your products in diverse Indian
              localities retail markets, providing maximum brand visibility and
              aiding the expansion of your D2C brand.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="Faq-content">
        <div className={styles.accordion}>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem
              header="What types of retail stores does Baylink collaborate with?"
              initialEntered
            >
              Baylink strategically collaborates with a wide array of local
              retail stores, spanning diverse categories, to facilitate
              effective product placement and expand your brand&rsquo;s presence
              in your target market.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="Faq-content">
        <div className={styles.accordion}>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem
              header="How can I find stores near me that carry products available through Baylink?"
              initialEntered
            >
              You can conveniently find stores near you that carry products
              available through Baylink by utilizing our app and website&rsquo;s
              store locator feature.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
