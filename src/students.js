(function(){
    'use strict';
    var name = document.getElementById('name')
    var firstName = document.getElementById('firstName')
    var birthday = document.getElementById('birthday')
    var place = document.getElementById('place')
    var adresse = document.getElementById('adresse')
    var phone = document.getElementById('phone')
    var mail = document.getElementById('mail')

    var bouton = document.getElementById('bouton')

    var syncDom = document.getElementById('sync-wrapper')

    var db = new PouchDB('student')
    var remoteCouch = 'http://admin:admin@127.0.0.1:5984/student'

    db.changes({
        since: 'now',
        live: true
    }).on('change', showStudents)

    function addStudent(name, firstName, birthday, place, adresse, phone, mail){
        var student = {
            _id: new Date().toISOString(),
            name: name,
            firstName: firstName,
            birthday: birthday,
            place: place,
            adresse: adresse,
            phone: phone,
            mail: mail
        }
        db.put(student, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a student!');
            }else{
                console.log(err)
            }
        });
    }

    bouton.onclick = function(e){
        console.log('click!')
        e.preventDefault()
        addStudent(name.value, firstName.value, birthday.value, place.value, adresse.value, phone.value, mail.value)
    }


    function sync() {
        var syncHandler = db.sync(remoteCouch, {
            live: true,
            retry: true,
            back_off_function: function (delay) {
                console.log('backoff', delay);
                syncDom.setAttribute('data-sync-state', 'reconnecting');
                if (delay === 0) {
                    return 100;
                }
                if (delay >= 3200) {
                    return 3200;
                }
                return delay * 2;
            },
        });

        syncHandler.on('paused', function (err) {
            console.log('paused', err);
            syncDom.setAttribute('data-sync-state', 'paused');
        });

        syncHandler.on('active', function (info) {
            console.log('active', info);
            syncDom.setAttribute('data-sync-state', 'active');
        });

        syncHandler.on('change', function (info) {
            console.log('change', info);
        });

        syncHandler.on('complete', function (info) {
            console.log('complete', info);
        });
        syncHandler.on('denied', function (err) {
            console.log('denied', err);
        });

        syncHandler.on('error', function (err) {
            console.log('error', err);
            syncDom.setAttribute('data-sync-state', 'error');
        });
    }

    function createTodoListItem(student){
        var tr = document.createElement('tr')
        tr.insertCell(-1).innerHTML = student.name
        tr.insertCell(-1).innerHTML = student.firstName
        tr.insertCell(-1).innerHTML = student.birthday
        tr.insertCell(-1).innerHTML = student.place
        tr.insertCell(-1).innerHTML = student.adresse
        tr.insertCell(-1).innerHTML = student.phone
        tr.insertCell(-1).innerHTML = student.mail

        return tr
    }

    function redrawTodosUI(student) {
        var tb = document.getElementById('tb');
        tb.innerHTML = '';
        student.forEach(function(students) {
            tb.appendChild(createTodoListItem(students.doc));
        });
    }
    function showStudents() {
        db.allDocs({include_docs: true, descending: true}, function(err, doc) {
            redrawTodosUI(doc.rows);
        });
    }

    showStudents();

    if (remoteCouch) {
        sync();
    }

})();