"use client"
import React from 'react'

function StatusButton({ id,status,color }) {
  // Only show the button if appointment is not already cancelled/done

  return (
    <button
      className={`border-1  w-12 h-7 flex items-center justify-center rounded-2xl p-2 text-xs hover:bg-blue-200 transition`}
      title="Cancel appointment"
      onClick={async (e) => {
        e.stopPropagation();
        try {
          const res = await fetch(`/api/appointment/${status}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: id
            }),
          });
          if (res.ok) {
            window.location.reload();
          } else {
            const data = await res.json();
            alert(data.error);
          }
        } catch (err) {
          alert("Error cancelling appointment");
        }
      }}
    >{status}</button>
  )
}

export default StatusButton
