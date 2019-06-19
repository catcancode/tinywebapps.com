function sum() {
    var pr_age = parseInt(document.getElementById("pr_age").value);
    var pr_english = parseInt(document.getElementById("pr_english").value);
    var pr_overseas_job = parseInt(document.getElementById("pr_overseas_job").value);
    var pr_aus_job = parseInt(document.getElementById("pr_aus_job").value);
    var pr_degree = parseInt(document.getElementById("pr_degree").value);
    var pr_aus_research = parseInt(document.getElementById("pr_aus_research").value);
    var pr_aus_study = parseInt(document.getElementById("pr_aus_study").value);
    var pr_py = parseInt(document.getElementById("pr_py").value);
    var pr_naati = parseInt(document.getElementById("pr_naati").value);
    var pr_regional_aus = parseInt(document.getElementById("pr_regional_aus").value);
    var pr_partner = parseInt(document.getElementById("pr_partner").value);
    var pr_state_nomination = parseInt(document.getElementById("pr_state_nomination").value);
    var pr_regional_nomination = parseInt(document.getElementById("pr_regional_nomination").value);
    var sum = pr_age + pr_english + pr_overseas_job + pr_aus_job + pr_degree + pr_aus_research + pr_aus_study + pr_py
        + pr_naati + pr_regional_aus + pr_partner + pr_state_nomination + pr_regional_nomination;
    document.getElementById("pr_sum_points").innerText = sum;
}