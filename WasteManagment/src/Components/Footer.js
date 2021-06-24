import SimpleReactFooter from "simple-react-footer";


function Footer() {
  // const description = " to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
  const description="Welcom to the Future ! our mession is to help you make the environment cleaner"
  const title = "Waste Mangment";
  const columns = [
    {
        title: "About Us",
        resources: [
            {
                name: "How To start",
                link: "/about"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
              name: "Our Team",
              link: "/contact" 
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
 ];
 return (
 <SimpleReactFooter
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="black"
    iconColor="black"
    backgroundColor="#242424"
    fontColor="white"
    copyrightColor="darkgrey"
 />
 );
};
export default Footer;
