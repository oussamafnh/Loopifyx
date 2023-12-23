import styled from 'styled-components';



const StyleComponent = styled.div`


  &.light {
    .App {
        background-color: #ffffff;
    }
      
    background-color: #ffffff;
    .sec1 svg path{
        stroke: #000000;
    }
    .home-title h1 {
        background-image: url(https://res.cloudinary.com/dhdjakjos/image/upload/v1703179939/Untitled_14__page-0001_b3qcd7.jpg);
    }
    .nav{
        background-color: #ffffff ;
        box-shadow: 0 12px 44px 0 rgba(255, 255, 255, 0.2);
        .logo .path2{
            fill:#000000; 
        }
        .logo .star{
            fill:#ffffff;
        }
        .github path{
            fill:#000000; 
        }
        .path1{
            fill:#FF6B00
        }
    }
    .card{
        border: 2px solid #000000;
        h3 {
            color:#000000
        }     
    }
    .home-galery{
        background-color: #ffffff;
    }
    .patterpage {
        background-color: #ffffff;
        .imgandtitle h1 {
            color:#000000;
        }
    }
    .goback path{
        fill:#000000;
    }
    .card-code {
        background-image: linear-gradient(#526D82, white);
    }
    
}








&.dark {
    .App {
        background-color: #000000;
    }
    background-color: #000000;
    .sec1 svg path{
        stroke: #ffffff;
    }
    .home-title h1 {
        background-image: url(https://res.cloudinary.com/dhdjakjos/image/upload/v1703364509/Untitled_15__page-0001_zenvng.jpg);
    }
    .nav{
        background-color: #000000 ;
        box-shadow: 0 12px 44px 0 rgba(0, 0, 0, 0.2);
        .logo .path2{
            fill:#ffffff;
        }
        .logo .star{
            fill:#000000;
        }
        .github path{
            fill:#ffffff; 
        }
        .path1{
            storke:#FF6B00
        }
    }
    .card{
        border: 2px solid #ffffff;
        h3 {
            color:#ffffff
        }
        img {
            -webkit-filter: invert(100%); /* Safari/Chrome */
            filter: invert(100%);        
        }          
    }
    .home-galery{
        background-color: #000000;
    }
    .patterpage {
        background-color: #000000;
    }
    .imgandtitle {    
        h1 {
            color:#ffffff;
        }
    
        img {
            -webkit-filter: invert(100%); /* Safari/Chrome */
            filter: invert(100%);
        }
    }
    .goback path{
        fill:#ffffff;
    }
    .card-code {
        background-image: linear-gradient(#1a2329, #000000);
    }
    #code {
        background-color: #27374D;
        color: #ffffff;
    }
    .copy {
        --button-bg: #27374D;
        --button-hover-bg: #526D82;
        --button-text-color: #CCCCCC;
        --button-hover-text-color: #8bb9fe;
        --button-outline-color: rgb(141, 141, 141);
        --tooltip-bg: #27374D;
        --tootip-text-color: #ffffff;
    }

    .copy svg path{
        fill:#ffffff;
    }
    
}
`;


export default StyleComponent;