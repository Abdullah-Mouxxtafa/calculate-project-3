function calculateAge() {
    const birthDate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    
    // حساب الفرق بالميللي ثانية
    const differenceInTime = today.getTime() - birthDate.getTime();

    // تحويل الفرق إلى أيام
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    // حساب السنوات والأشهر والأيام
    const years = Math.floor(differenceInDays / 365.25);
    const remainingDays = differenceInDays % 365.25;
    const months = Math.floor(remainingDays / 30.44);
    const days = Math.floor(remainingDays % 30.44);

    // عرض النتيجة
    document.getElementById("result").textContent = `عمرك هو: ${years} سنة و ${months} شهر و ${days} يوم`;
}