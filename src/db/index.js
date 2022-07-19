import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('booking.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS booking (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, surname TEXT NOT NULL, phone TEXT NOT NULL, date TEXT NOT NULL)',
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const insertBooking = (name, surname, phone, date) => {
    console.log("Hello is name: " + name);
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO booking (name, surname, phone, date) VALUES (?, ?, ?, ?)',
                [name, surname, phone, date],
                (_, result) => {
                    console.log(result);
                    resolve(result)
                },
                (_, err) => {
                    console.log(err);
                    reject(err)
                }
            )
        })
    })

    return promise;
}

export const getBooking = () => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
              'SELECT * FROM booking',
              [],
              (_, result) => {
                  resolve(result)
              },
              (_, err) => {
                  reject(err)
              }
          )
      })}
  )

  return promise;
}