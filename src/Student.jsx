import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const Student  = (props) => {
    return(
        <>
            <h1 className="text-center">ETUDIANT</h1>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="name">Nom</label>
                        <input id="name" className="form-control" placeholder="Nom" required/>
                    </div>
                    <div className="form-group">
                        <label for="firstName">Prénom(s)</label>
                        <input id="firstName" className="form-control" placeholder="Prénom(s)" required/>
                    </div>
                    <div className="form-group">
                        <label for="birthday">Date de naissance</label>
                        <input id="birthday" className="form-control" placeholder="Date de naissance" type="date" required/>
                    </div>
                    <div className="form-group">
                        <label for="place">Lieu de naissance</label>
                        <input id="place" className="form-control" placeholder="Lieu de naissance" required/>
                    </div>
                    <div className="form-group">
                        <label for="adresse">Adresse</label>
                        <input id="adresse" className="form-control" placeholder="Adresse" required/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Numéro de téléphone</label>
                        <input id="phone" className="form-control" placeholder="Numéro de téléphone" type="number" required/>
                    </div>
                    <div className="form-group">
                        <label for="mail">Mail</label>
                        <input id="mail" className="form-control" placeholder="Mail" required/>
                    </div>

                    <button id="bouton" className="btn btn-primary">Créer</button>
                </form>
            </div>


            <table id="table" className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom(s)</th>
                        <th>Date de naissance</th>
                        <th>Lieu de naissance</th>
                        <th>Adresse</th>
                        <th>Téléphone</th>
                        <th>Mail</th>
                    </tr>
                </thead>
                <tbody id="tb">

                </tbody>
            </table>

            <footer id="footer" hidden>
                <span id="todo-count"></span>
                <div id="sync-wrapper">
                    <div id="sync-active">Connection live. Replicating changes...</div>
                    <div id="sync-paused">Connection live. Everything is up to date.</div>
                    <div id="sync-reconnecting">Connection lost. Trying to reconnect...</div>
                    <div id="sync-error">There was a problem syncing</div>
                </div>
            </footer>
        </>
    );
}
export default Student;