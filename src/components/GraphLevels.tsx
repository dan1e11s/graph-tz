import { useState } from 'react';

const GraphLevels = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleEnter = () => {
    setOpen(true);
  };

  const handleLeave = () => {
    setOpen(false);
  };

  const getLevel = (level: number) => {
    switch (level) {
      case 1:
        return 'No contributions';
      case 2:
        return '1-9 contributions';
      case 3:
        return '10-19 contributions';
      case 4:
        return '20-29 contributions';
      case 5:
        return '30+ contributions';
    }
  };

  return (
    <div className="level-container">
      <p>Меньше</p>
      <div className="level-items">
        {[1, 2, 3, 4, 5].map((level, index) => (
          <div
            className={`one-day level-${level}`}
            key={index}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            {open && (
              <div className="items">
                <p className="text">{getLevel(level)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p>Больше</p>
    </div>
  );
};

export default GraphLevels;
