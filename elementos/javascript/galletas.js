"use strict";
const hdc = 70;
const prot = 11;
const gras = 12;
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const gramos = input.value;
    const HDC = gramos * hdc / 100;
    const PROT = gramos * prot / 100;
    const GRAS = gramos * gras / 100;
    const GRAS2 = GRAS.toFixed(2);
    const HDC2 = HDC.toFixed(2);
    const PROT2 = PROT.toFixed(2);
    const HDC3 = HDC2 * 4;
    const GRAS3 = GRAS2 * 9;
    const PROT3 = PROT2 * 4;
    const CAL = GRAS3 + PROT3 + HDC3;
    const CAL2 = CAL.toFixed(2);
    let newhtml = `<div resultado>
                                <p class="text-result">Valores de las Galletas en ${gramos} g</p>
                                <div class="inicial">
                                    <table class="table">
                                        <tr>
                                            <td>GALLETAS</td>
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