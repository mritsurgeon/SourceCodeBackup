import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const History = () => {
  const [backupHistory, setBackupHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/fetchLogFile')
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split('\n');

        const formattedData = lines.map((line) => {
          let type = '';
          if (line.includes('ERR')) {
            type = 'ERR';
          } else if (line.includes('WRN')) {
            type = 'WRN';
          } else {
            type = 'INF';
          }

          const [timestamp, message] = line.split(type).map((item) => item.trim());
          return { type, timestamp, message };
        });

        setBackupHistory(formattedData);
      });
  }, []); 

  return (
    <div style={{ padding: '20px' }}>
      <h1>Backup History</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {backupHistory.map((row, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: row.type === 'WRN' ? 'lightyellow' : row.type === 'ERR' ? 'lightcoral' : 'transparent',
                }}
              >
                <TableCell>{row.type}</TableCell>
                <TableCell dangerouslySetInnerHTML={{ __html: row.timestamp }} />
                <TableCell dangerouslySetInnerHTML={{ __html: row.message }} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default History;
