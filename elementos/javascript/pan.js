"use strict";
const hdc = 60;
const prot = 10;
const ca = 22;
const fe = 1.1;
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const gramos = input.value;
    const HDC = gramos * hdc / 100;
    const PROT = gramos * prot / 100;
    const CA = gramos * ca / 100;
    const FE = gramos * fe / 100;
    const CA2 = CA.toFixed(2);
    const FE2 = FE.toFixed(2);
    const HDC2 = HDC.toFixed(2);
    const PROT2 = PROT.toFixed(2);
    const HDC3 = HDC2 * 4;
    const PROT3 = PROT2 * 4;
    const CAL =  PROT3 + HDC3;
    const CAL2 = CAL.toFixed(2);
    let newhtml = `<div resultado>
                                <p class="text-result">Valores del Pan francés en ${gramos} g</p>
                                <div class="inicial">
                                    <table class="table">
                                        <tr>
                                            <td>PAN FRNACÉS</td>
                                            <td>${gramos} g</td>
                                        </tr>
                                        <tr>
                                            <td>hidratos de carbono</td>
                                            <td>${HDC2} g</td>
                                        </tr>
                                        <tr>
                                            <td>proteina</td>
                                            <td>${PROT2} g</td>
                                        </tr>
                                        <tr>
                                            <td>grasas</td>
                                            <td>-</td>
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