// components/GrimoireShell.tsx
'use client';
import React from 'react';

type Props = React.PropsWithChildren<{
  mode?: 'toc' | 'default' | string;
}>;

export default function GrimoireShell({ mode = 'default', children }: Props) {
  return (
    <div className="container mx-auto p-6" data-mode={mode}>
      {children}
    </div>
  );
}
