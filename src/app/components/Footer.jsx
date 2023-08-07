export default function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return(
        <>
        <p class="left-0 bottom-0 w-full text-center ">Copyright © {year}  <span class="font-semibold"> Armelle Alexy </span></p>
        </>
    )
}