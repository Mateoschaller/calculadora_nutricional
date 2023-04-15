"use strict";
const gras = 100;
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click",()=>{
    const gramos = input.value;
    const GRAS = gramos * gras /100;
    const GRAS2 = GRAS.toFixed(2);
    const GRAS3 = GRAS2 * 9;
    const CAL = GRAS3 ;
    const CAL2 = CAL.toFixed(2);
    let newhtml = `<div resultado>
                                <p class="text-result">Valores del Aceite en ${gramos} g</p>
                                <div class="inicial">
                                    <table class="table">
                                        <tr>
                                            <td>ACEITE</td>
                                            <td>${gramos} g</td>
                                        </tr>
                                        <tr>
                                            <td>hidratos de carbono</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>proteina</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>grasas</td>
                                            <td>${GRAS2} g</td>
                                        </tr>
                                        <tr>
                                            <td>Calorias</td>
                                            <td>${CAL2} cal</td>
                                        </tr>
                                        <tr>
                                            <td>calcio</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>fierro</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>vitamina A</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>vitamina C</td>
                                            <td>-</td>
                                        </tr>
                                    </table>
                                </div>
                            </div> `;
    document.querySelector(".resultado").innerHTML += newhtml;
    
});