const formal = [
    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .wave {
        border-radius: 40px 0 40px 0;
        transition: 0.3s ease;
    }
    .waveA {
        background-color: lightcyan;
        border-radius: 40px 0 40px 0;
        color: blue;
        border: 2px solid rgb(91, 129, 255);
        box-shadow: 2px 2px 2px 1px rgba(60, 112, 255, 0.2);
        transition: 0.3s ease;
    }
    .waveA:focus {
        border: 3px solid rgb(0, 204, 255);
        box-shadow: 12px 12px 2px 1px rgba(60, 112, 255, 0.2);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .wave {
        border-radius: 40px 0 40px 0;
        transition: 0.3s ease;
    }
    .waveB {
        background-color: rgb(255, 213, 213);
        color: rgb(255, 0, 0);
        border: 2px solid rgb(255, 111, 111);
        box-shadow: 2px 2px 2px 1px rgba(100, 32, 32, 0.2);
    }
    .waveB:focus {
        border: 3px solid rgb(255, 42, 42);
        box-shadow: 12px 12px 2px 1px rgba(100, 32, 32, 0.2);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .wave {
        border-radius: 40px 0 40px 0;
        transition: 0.3s ease;
    }
    .waveC {
        background-color: rgb(255, 254, 191);
        color: rgb(197, 0, 197);
        border: 2px solid rgb(230, 146, 255);
        box-shadow: 2px 2px 2px 1px rgba(249, 73, 255, 0.4);
    }
    .waveC:focus {
        border: 3px solid rgb(255, 251, 0);
        box-shadow: 12px 12px 2px 1px rgba(249, 73, 255, 0.4);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .wave {
        border-radius: 40px 0 40px 0;
        transition: 0.3s ease;
    }
    .waveD {
        background-color: rgb(171, 255, 145);
        color: rgb(0, 94, 12);
        border: 2px solid rgb(0, 94, 12);
        box-shadow: 2px 2px 2px 1px rgba(0, 110, 6, 0.4);
    }
    .waveD:focus {
        border: 3px solid rgb(105, 255, 163);
        box-shadow: 12px 12px 2px 1px rgba(0, 110, 6, 0.4);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .wave {
        border-radius: 40px 0 40px 0;
        transition: 0.3s ease;
    }
    .waveE {
        background-color: rgb(255, 229, 189);
        color: rgb(0, 0, 0);
        border: 2px solid rgb(250, 187, 69);
        box-shadow: 2px 2px 2px 1px rgba(114, 84, 0, 0.4);
    }
    
    .waveE:focus {
        border: 3px solid rgb(255, 213, 178);
        box-shadow: 12px 12px 2px 1px rgba(114, 84, 0, 0.4);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .wave {
        border-radius: 40px 0 40px 0;
        transition: 0.3s ease;
    }
    .waveF {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        border: 2px solid rgb(56, 56, 56);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
    }
    
    .waveF:focus {
        border: 3px solid rgb(255, 255, 255);
        box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.4);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .modern {
        transition: 0.3s ease;
    }
    .modernA {
        background-color: rgba(255, 212, 255);
        border: 3px solid hotpink;
        color: rgb(255, 0, 212);
        box-shadow: 10px -10px 0px rgb(168, 0, 154);
    
    }
    .modernA:focus {
        box-shadow: -10px 10px 0px rgb(255, 135, 239);
        border: 4px solid rgb(255, 0, 212);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .modern {
        transition: 0.3s ease;
    }
    .modernB {
        background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
        border: 3px solid rgb(0, 209, 17);
        box-shadow: 10px -10px 0px rgb(194, 255, 176);
    
    }
    .modernB:focus {
        box-shadow: -10px 10px 0px rgb(255, 170, 244);
        border: 4px solid rgb(255, 0, 212);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .modern {
        transition: 0.3s ease;
    }
    .modernC {
        background-color: white;
        border: 3px solid black;
        box-shadow: 10px -10px 0px rgb(192, 192, 192);
    
    }
    .modernC:focus {
        box-shadow: -10px 10px 0px rgb(157, 255, 234);
        border: 4px solid rgb(26, 202, 247);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .modern {
        transition: 0.3s ease;
    }
    .modernD {
        background-color: rgb(131, 241, 255);
        border: 3px solid rgb(255, 145, 0);
        box-shadow: 10px -10px 0px rgb(252, 230, 169);
    
    }
    .modernD:focus {
        box-shadow: -10px 10px 0px rgb(131, 241, 255);
        border: 4px solid rgb(49, 96, 250);
        color: rgb(49, 96, 250);
        background-color: rgb(252, 230, 169);
    }`,
    
    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .modern {
        transition: 0.3s ease;
    }
    .modernE {
        background-color: rgb(255, 255, 255);
        border: 3px solid rgb(255, 0, 0);
        box-shadow: 10px -10px 0px rgb(252, 169, 169);
    
    }
    .modernE:focus {
        box-shadow: -10px 10px 0px rgb(236, 236, 236);
        border: 4px solid rgb(190, 190, 190);
        color: rgb(255, 255, 255);
        background-color: rgb(255, 0, 0);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .pop {
        transition: 0.3s ease;
        border-radius: 2px;
    }   
    .popA {
        background-color: rgb(7, 87, 0);
        border: 2px solid lightgreen;
        box-shadow: none;
    }
    .popA:focus {
        box-shadow: 0 0 20px rgb(0, 107, 18);
        color: rgb(0, 0, 0);
        background-color: rgb(150, 255, 124);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .pop {
        transition: 0.3s ease;
        border-radius: 2px;
    }
    .popB {
        background-color: rgb(255, 0, 255);
        border: 2px solid rgb(255, 187, 246);
        box-shadow: none;
    }
    .popB:focus {
        box-shadow: 0 0 20px rgb(185, 0, 185);
        color: rgb(0, 0, 0);
        background-color: rgb(255, 187, 246);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .pop {
        transition: 0.3s ease;
        border-radius: 2px;
    }
    .popC {
        background-color: rgb(4, 0, 255);
        border: 2px solid rgb(158, 249, 255);
        box-shadow: none;
    }
    .popC:focus {
        box-shadow: 0 0 20px rgb(2, 0, 131);
        color: rgb(0, 0, 0);
        background-color: rgb(158, 249, 255);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .pop {
        transition: 0.3s ease;
        border-radius: 2px;
    }
    .popD {
        background-color: rgb(0, 0, 0);
        border: 2px solid gray;
        box-shadow: none;
    }
    
    .popD:focus {
        box-shadow: 0 0 20px rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        background-color: rgb(255, 255, 255);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .pop {
        transition: 0.3s ease;
        border-radius: 2px;
    }
    .popE {
        background-color: rgb(255, 136, 0);
        border: 2px solid rgb(255, 226, 188);
        box-shadow: none;
    }
    
    .popE:focus {
        box-shadow: 0 0 20px rgb(196, 104, 0);
        color: rgb(0, 0, 0);
        background-color: rgb(255, 226, 188);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .round {
        transition: 0.3s ease;
        border: none;
        border-radius: 30px;
    }
    .roundA {
        background-color: rgb(88, 247, 247);
        box-shadow: inset 0 0 30px gray;
    }
    .roundA:focus {
        box-shadow: inset 0 0 10px gray;
        color: rgb(0, 0, 0);
        background-color: rgb(188, 247, 255);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .round {
        transition: 0.3s ease;
        border: none;
        border-radius: 30px;
    }
    .roundB {
        background-color: rgb(195, 122, 255);
        box-shadow: inset 0 0 30px gray;
    }
    .roundB:focus {
        box-shadow: inset 0 0 10px rgb(128, 128, 128);
        color: rgb(0, 0, 0);
        background-color: rgb(243, 205, 255);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .round {
        transition: 0.3s ease;
        border: none;
        border-radius: 30px;
    }
    .roundC {
        background-color: rgb(255, 50, 50);
        box-shadow: inset 0 0 30px gray;
    }
    .roundC:focus {
        box-shadow: inset 0 0 10px rgb(128, 128, 128);
        color: rgb(0, 0, 0);
        background-color: rgb(255, 204, 204);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .round {
        transition: 0.3s ease;
        border: none;
        border-radius: 30px;
    }
    .roundD {
        background-color: rgb(253, 249, 0);
        box-shadow: inset 0 0 30px gray;
    }
    .roundD:focus {
        box-shadow: inset 0 0 10px rgb(128, 128, 128);
        color: rgb(0, 0, 0);
        background-color: rgb(249, 255, 196);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .round {
        transition: 0.3s ease;
        border: none;
        border-radius: 30px;
    }
    .roundE {
        background-color: rgb(88, 228, 69);
        box-shadow: inset 0 0 30px gray;
    }
    .roundE:focus {
        box-shadow: inset 0 0 10px rgb(128, 128, 128);
        color: rgb(0, 0, 0);
        background-color: rgb(197, 255, 174);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .expand {
        transition: 0.3s ease;
    }
    .expandA {
        border: 1px solid purple;
    }
    .expandA:focus {
        color: rgb(0, 0, 0);
        background-color: rgb(235, 204, 255);
        box-shadow: 0 0 3px 20px rgb(241, 212, 255);
        border: 5px solid purple;
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .expand {
        transition: 0.3s ease;
    }
    .expandB {
        border: 1px solid rgb(255, 0, 0);
    }
    .expandB:focus {
        color: rgb(0, 0, 0);
        background-color: rgb(255, 205, 205);
        box-shadow: 0 0 3px 20px rgb(255, 205, 205);
        border: 5px solid rgb(255, 0, 0);
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .expand {
        transition: 0.3s ease;
    }
    .expandC {
        border: 1px solid green;
    }
    .expandC:focus {
        color: rgb(0, 0, 0);
        background-color: rgb(193, 253, 193);
        box-shadow: 0 0 3px 20px rgb(193, 253, 193);
        border: 5px solid green;
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .expand {
        transition: 0.3s ease;
    }
    .expandD {
        border: 1px solid blue;
    }
    .expandD:focus {
        color: rgb(0, 0, 0);
        background-color: rgb(209, 243, 255);
        box-shadow: 0 0 3px 20px rgb(209, 243, 255);
        border: 5px solid blue;
    }`,

    `.input {
        padding: 10px 10px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }
    .input:focus {
        outline: none;
    }
    .expand {
        transition: 0.3s ease;
    }
    .expandE {
        border: 1px solid hotpink;
    }
    .expandE:focus {
        color: rgb(0, 0, 0);
        background-color: rgb(255, 213, 241);
        box-shadow: 0 0 3px 20px rgb(255, 213, 241);
        border: 5px solid hotpink;
    }`
]

export default formal;