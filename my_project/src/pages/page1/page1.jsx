import P1_section1 from '../../components/page1/P1_section1/P1_sect1'
import P1_section2 from '../../components/page1/P1_section2/P1_sect2'
import P1_section3 from '../../components/menu_component_section/menu'
import P1_section4 from '../../components/page1/P1_section4/P1_section4'

export default function Page1(){
    return(
        <>
            <P1_section1/>
            <P1_section2/>
            <P1_section3 title="Our popular menu"/>
            <P1_section4/>
        </>
    )
}