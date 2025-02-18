export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric'
    }).format(date);
  } catch {
    return dateString;
  }
};

export const validateDateRange = (startDate: string, endDate: string): boolean => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start <= end;
};

export const isCurrentDate = (dateString: string): boolean => {
  return dateString.toLowerCase() === 'present' || dateString === '';
};

export const formatDateRange = (startDate: string, endDate: string): string => {
  const start = formatDate(startDate);
  const end = isCurrentDate(endDate) ? 'Present' : formatDate(endDate);
  return `${start} - ${end}`;
};