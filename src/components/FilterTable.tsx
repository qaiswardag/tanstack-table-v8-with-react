import React, { useEffect, useMemo, useState } from 'react';
import '../index.css';
import { reactFetch } from 'lightweight-react-fetch';

export default function FilterTable() {
  const pathData = `/vulnerabilities-data.json`;

  // use React fetch
  const {
    handleData,
    fetchedData,
    isError,
    validationProperties,
    isLoading,
    isSuccess,
  } = reactFetch();

  useEffect(() => {
    const fetchData = function () {
      handleData(
        pathData,
        {},
        {
          isLoading: true,
          additionalCallTime: 100,
          abortTimeoutTime: 8000,
        }
      );
    };

    fetchData();
    console.log('fetch data function ran!');
  }, []);

  // useEffect(() => {
  //   console.log('fetchedData er', fetchedData);
  // }, [fetchedData]);

  const columns = useMemo(function () {
    [
      {
        // what is the title of the column we want to display
      },
    ];
  }, []);

  return (
    <div>
      <div className="border-2 border-gray-300 px-4 py-4 mt-8 mb-12 rounded">
        <p>Table here</p>
      </div>
    </div>
  );
}
