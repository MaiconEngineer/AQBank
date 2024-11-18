export function formatDate(inputDate: string): string {
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    const date = new Date(inputDate);
  
    if (isNaN(date.getTime())) {
      throw new Error("Data inválida");
    }
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} de ${month} de ${year}`;
  }