import React from 'react';

interface meetingProps {
  params: { id: string };
}

function Meeting({ params }: meetingProps) {
  const id = params.id;
  return <div>{id}</div>;
}

export default Meeting;

// /meeting/1 => 1
