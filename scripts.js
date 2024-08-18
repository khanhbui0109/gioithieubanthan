document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const moreInfoDiv = document.getElementById('moreInfo');
    
    moreInfoBtn.addEventListener('click', function() {
        if (moreInfoDiv.classList.contains('hidden')) {
            moreInfoDiv.classList.remove('hidden');
            moreInfoBtn.textContent = 'Ẩn thông tin';
        } else {
            moreInfoDiv.classList.add('hidden');
            moreInfoBtn.textContent = 'Xem thêm thông tin';
        }
    });
});