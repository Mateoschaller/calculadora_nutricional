"use strict";
const prot = 0.5;
const gras = 84;
const ca =15;
const fe = 0.2;
const v_a = 2240;
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const gramos = input.value;
    const PROT = gramos * prot / 100;
    const GRAS = gramos * gras / 100;
    const CA = gramos * ca / 100;
    const FE = gramos * fe / 100;
    const V_A = gramos * v_a / 100;
    const CA2 = CA.toFixed(2);
    const FE2 = FE.toFixed(2);
    const V_A2 = V_A.toFixed(2);
    const GRAS2 = GRAS.toFixed(2);
    const PROT2 = PROT.toFixed(2);
    const GRAS3 = GRAS2 * 9;
    const PROT3 = PROT2 * 4;
    const CAL = GRAS3 + PROT3 ;
    const CAL2 = CAL.toFixed(2);
    let newhtml = `<div resultado>
                                <p class="text-result">Valores de la Manteca en ${gramos} g</p>
                                <div class="inicial">
                                    <table class="table">
                                        <tr>
                                            <td>MANTECA</td>
                                            <td>${gramos} g</td>
                                        </tr>
                                        <tr>
                                            <td>hidratos de carbono</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>proteina</td>
                                            <td>${PROT2} g</td>
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
                                            <td>${CA2} mg</td>
                                        </tr>
                                        <tr>
                                            <td>fierro</td>
                                            <td>${FE2} mg</td>
                                        </tr>
                                        <tr>
                                            <td>vitamina A</td>
                                            <td>${V_A2} U.I</td>
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