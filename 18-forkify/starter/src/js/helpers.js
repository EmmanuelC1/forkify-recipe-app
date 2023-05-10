import 'regenerator-runtime/runtime';
import { TIMEOUT_SEC } from './config';

/**
 * Returns a new Promise that will always reject after a given s seconds
 * @param {Number} s The number of seconds to delay setTimeout()
 * @returns {Promise} A rejected promise with new Error object after s amount of seconds
 */
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

/**
 * Uses fetch API to fetch (GET & POST) data from given API
 * @param {String} url The API url that will be used to fetch
 * @param {Object | undefined} [uploadData=undefined] Object for POST method in AJAX call. If undefined, GET method will be executed
 * @returns {Object} GET method returns the resolved JSON data from API. POST method returns POST status of AJAX call
 */
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    // re-throw error so promise is rejected
    throw err;
  }
};

// These functions were refactored into one above
/*
export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    // re-throw error so promise is rejected
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/
